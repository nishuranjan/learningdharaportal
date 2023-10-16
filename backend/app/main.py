from fastapi import FastAPI
import uvicorn
from path import Path
from starlette.staticfiles import StaticFiles

from app.routers.routes import configure_routes

app = FastAPI()


def configure():
    configure_static()
    configure_routes(app)


def configure_static():
    app.mount('/assets', StaticFiles(directory='assets'), name='assets')


if __name__ == "__main__":
    configure()
    uvicorn.run(
        app=f'{Path(__file__).stem}:app',
        # app='__main__:app',
        host="127.0.0.1",
        port=8000,
        reload=True
    )
else:
    configure()
    pass
