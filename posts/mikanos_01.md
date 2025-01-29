---
title: '「ゼロからのOS自作入門」2章 EDKⅡでHello worldを実行する(前編)'
description: ゼロからのOS自作入門」2章 EDKⅡでHello worldを実行します．
date: 2021-09-21
category: 
  - OS
tags:
  - OS
  - Docker
  - C++
---

<!-- https://www.hamlet-engineer.com -->
ゼロからのOS自作入門」2章 EDKⅡでHello worldを実行します．

EDKⅡのダウンロードはDockerでビルドした時に実行済みです．

<!-- more -->

<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>






## MikanLoaderPkg
/workspaces/mikanos-devcontainer/mikanos/MikanLoaderPkgを作成し，下記の内容のファイルを作成します．

(MikanLoaderPkg.dec・MikanLoaderPkg.dsc・Loader.inf・Main.c)

```C
// MikanLoaderPkg.dec
[Defines]
  DEC_SPECIFICATION              = 0x00010005
  PACKAGE_NAME                   = MikanLoaderPkg
  PACKAGE_GUID                   = 452eae8e-71e9-11e8-a243-df3f1ffdebe1
  PACKAGE_VERSION                = 0.1
```

```C
// MikanLoaderPkg.dsc
[Defines]
  PLATFORM_NAME                  = MikanLoaderPkg
  PLATFORM_GUID                  = d3f11f4e-71e9-11e8-a7e1-33fd4f7d5a3e
  PLATFORM_VERSION               = 0.1
  DSC_SPECIFICATION              = 0x00010005
  OUTPUT_DIRECTORY               = Build/MikanLoader$(ARCH)
  SUPPORTED_ARCHITECTURES        = X64
  BUILD_TARGETS                  = DEBUG|RELEASE|NOOPT

[LibraryClasses]
  UefiApplicationEntryPoint|MdePkg/Library/UefiApplicationEntryPoint/UefiApplicationEntryPoint.inf
  UefiLib|MdePkg/Library/UefiLib/UefiLib.inf

  // 下記は教材にない設定です．ただ，入れないとエラーが吐いた
  BaseLib|MdePkg/Library/BaseLib/BaseLib.inf
  BaseMemoryLib|MdePkg/Library/BaseMemoryLib/BaseMemoryLib.inf
  DebugLib|MdePkg/Library/BaseDebugLibNull/BaseDebugLibNull.inf
  DevicePathLib|MdePkg/Library/UefiDevicePathLib/UefiDevicePathLib.inf
  MemoryAllocationLib|MdePkg/Library/UefiMemoryAllocationLib/UefiMemoryAllocationLib.inf
  PcdLib|MdePkg/Library/BasePcdLibNull/BasePcdLibNull.inf
  PrintLib|MdePkg/Library/BasePrintLib/BasePrintLib.inf
  DebugLib|MdePkg/Library/BaseDebugLibNull/BaseDebugLibNull.inf
  UefiBootServicesTableLib|MdePkg/Library/UefiBootServicesTableLib/UefiBootServicesTableLib.inf
  UefiRuntimeServicesTableLib|MdePkg/Library/UefiRuntimeServicesTableLib/UefiRuntimeServicesTableLib.inf

[Components]
  MikanLoaderPkg/Loader.inf
```

```C
// Loader.inf
[Defines]
  INF_VERSION                    = 0x00010006
  BASE_NAME                      = Loader
  FILE_GUID                      = c9d0d202-71e9-11e8-9e52-cfbfd0063fbf
  MODULE_TYPE                    = UEFI_APPLICATION
  VERSION_STRING                 = 0.1
  ENTRY_POINT                    = UefiMain

#  VALID_ARCHITECTURES           = X64

[Sources]
  Main.c

[Packages]
  MdePkg/MdePkg.dec

[LibraryClasses]
  UefiLib
  UefiApplicationEntryPoint

  // 下記は教材にない設定です．ただ，入れないとエラーが吐いた
  BaseLib
  BaseMemoryLib
  DebugLib
  DevicePathLib
  MemoryAllocationLib
  PcdLib
  PrintLib
  DebugLib
  UefiBootServicesTableLib
  UefiRuntimeServicesTableLib

[Guids]

[Protocols]
```

```C
// Main.c
#include  <Uefi.h>
#include  <Library/UefiLib.h>

EFI_STATUS EFIAPI UefiMain(
    // handle:ウィンドウ等を操作したいときに対象を識別するために割り当てられる一意の番号
    // table:データを入れる表
    EFI_HANDLE image_handle,
    EFI_SYSTEM_TABLE* system_table) {

  Print(L"Hello, Mikan World!\n");
  while (1);
  return EFI_SUCCESS;
}
```


## edkⅡの設定
edkⅡディレクトリの中に/workspaces/mikanos-devcontainer/mikanos/MikanLoaderPkgのシンボリックリンクを作成します．

できうる限り書籍に沿うために，$HOME(/home/vscode)内にworkspacesのシンボリックリンクも作成します．
```sh
cd $HOME
ln -s /workspaces ./

cd ~/edk2/
ln -s $HOME/workspaces/mikanos-devcontainer/MikanLoaderPkg ./
```

シンボリックリンクの作成後，edksetup.shを実行し，作成されたConf/target.txtで下記の項目を書き換えます．

| 設定項目        | 設定値                            | 
| --------------- | --------------------------------- | 
| ACTIVE_PLATFORM | MikanLoaderPkg/MikanLoaderPkg.dsc | 
| TARGET          | DEBUG                             | 
| TARGET_ARCH     | X64                               | 
| TOOL_CHAIN_TAG  | CLANG38                           | 


書き換える時は，vimを使用しました．
```sh
sudo apt upgrade
sudo apt list upgrade
sudo apt install -y vim

vim Conf/target.txt
```

## build
下記のコマンドでビルドし，実行ファイル(~/edk2/Build/MikanLoaderX64/DEBUG_CLANG38/X64/Loader.efi)が作成されていることを確認します．

実際の実行は，また後日実施します．

```sh
cd ~/edk2
build

ls Build/MikanLoaderX64/DEBUG_CLANG38/X64/
# Loader.debug  Loader.efi  MdePkg  MikanLoaderPkg  TOOLS_DEF.X64
```



## まとめ
USBに突っ込んだ上での実行はしていませんが，一通り実装しました．

## 参考サイト
[「ゼロからのOS自作入門」のサポートサイト](https://zero.osdev.jp/)

[EDK II で UEFI アプリケーションを作る](https://osdev-jp.readthedocs.io/ja/latest/2017/create-uefi-app-with-edk2.html)

[ハンドル（handle）とは - IT用語辞典](https://e-words.jp/w/%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AB.html)






<ClientOnly>
  <CallInArticleAdsense />
</ClientOnly>

