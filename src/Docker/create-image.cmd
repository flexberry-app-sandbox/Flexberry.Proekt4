docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proekt4/app ../..
