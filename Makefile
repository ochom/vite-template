dev:
	@echo "Starting dev server..."
	@bun run dev 
 
tidy:
	@echo "Tidying up..."
	@bun install

lint:
	@echo "Linting..."
	@bun run lint

pretty:
	@echo "Prettifying..."
	@bun run pretty

build:
	@echo "Building..."
	@bun run build
