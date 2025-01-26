# コンテナ名
CONTAINER_NAME = hirasu-vitepress
# イメージ名
IMAGE_NAME = hirasu_vitepress

up: 
	docker compose up -d
atop: 
	docker compose stop
exec:
	docker exec -it $(CONTAINER_NAME) ash
rm:
	docker rm $(CONTAINER_NAME)
rmi:
	docker rmi $(IMAGE_NAME)
reset:
	docker compose stop
	docker rm $(CONTAINER_NAME)
	docker rmi $(IMAGE_NAME)