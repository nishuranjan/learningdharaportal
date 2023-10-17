from fastapi import APIRouter
from app.routers.api.home import router as home_router


def configure_routes(app):
    # api_router = APIRouter()
    app.include_router(home_router)
