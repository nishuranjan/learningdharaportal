from fastapi import APIRouter, responses
from starlette.requests import Request
from starlette.templating import Jinja2Templates

templates = Jinja2Templates("templates")

router = APIRouter()


@router.get("/")
async def index(request: Request):
    # return {'message': "Welcome to Larningdhara"}
    return templates.TemplateResponse(
        './home/index.html',
        {'request': request}
    )


@router.get('/favicon.ico')
async def favicon():
    return responses.RedirectResponse(url='../../assets/img/favicon.ico')
