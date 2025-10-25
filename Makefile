init:
	npm ci

install:
	npm install
	cd my-app && npm install

run:
	cd my-app && npm run dev