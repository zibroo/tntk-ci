FROM python:3.10-slim AS build
ENV DONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /code
COPY ./auth/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.10-slim 
WORKDIR /code
COPY --from=build /usr/local/ /usr/local/
COPY ./auth ./auth
COPY ./root ./root
COPY ./alembic ./alembic
COPY ./alembic.ini .

CMD ["python3", "-m", "uvicorn", "auth.main:app", "--host=0.0.0.0", "--reload"]

