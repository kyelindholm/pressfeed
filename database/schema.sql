\c postgres
DROP DATABASE IF EXISTS pressfeed;
CREATE DATABASE pressfeed;
\c pressfeed;

DROP TABLE IF EXISTS favorites CASCADE;
CREATE TABLE IF NOT EXISTS favorites (
  id SERIAL PRIMARY KEY,
  title TEXT,
  byline TEXT,
  abstract TEXT,
  shorturl TEXT,
  imgurl TEXT,
  caption TEXT,
  publishdate DATE
);