-- İnci Oto Yedek Parça Database Initialization Script
-- Bu script PostgreSQL container başlatıldığında otomatik çalışır

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create schemas
CREATE SCHEMA IF NOT EXISTS admin;
CREATE SCHEMA IF NOT EXISTS content;
CREATE SCHEMA IF NOT EXISTS analytics;

-- Set default search path
ALTER DATABASE inciotoyedekparca SET search_path TO public, admin, content, analytics;

-- Create admin user for application
-- DO $$ 
-- BEGIN
--   IF NOT EXISTS (SELECT 1 FROM pg_user WHERE usename = 'app_user') THEN
--     CREATE USER app_user WITH PASSWORD 'AppUser2024!';
--     GRANT CONNECT ON DATABASE inciotoyedekparca TO app_user;
--     GRANT USAGE ON SCHEMA public, admin, content, analytics TO app_user;
--   END IF;
-- END $$;

-- Log the initialization
INSERT INTO pg_stat_statements_info (dealloc) VALUES (0) ON CONFLICT DO NOTHING;

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'İnci Oto Yedek Parça Database successfully initialized!';
  RAISE NOTICE 'Database: inciotoyedekparca';
  RAISE NOTICE 'Admin User: admin';
  RAISE NOTICE 'Schemas: public, admin, content, analytics';
END $$; 