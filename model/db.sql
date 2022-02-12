-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'RECRUITER', 'ADMIN');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT E'INTERN',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;




CREATE TABLE "Category"(
    "id" VARCHAR(11) NOT NULL PRIMARY KEY,
    "category" VARCHAR(100) NOT NULL
);
CREATE INDEX "idx_categoryid" ON "Category"("id");


CREATE TABLE "Post"(
    "id" VARCHAR(11) NOT NULL PRIMARY KEY,
    "userid" VARCHAR(11) NOT NULL REFERENCES "User"("id") ON DELETE CASCADE,
    "title" VARCHAR(200) NOT NULL,
    "descriptions" TEXT NOT NULL,
    "job_type" VARCHAR(25) NOT NULL,
    "salary" NUMERIC NOT NULL,
    "job_experience" NUMERIC NOT NULL
);
CREATE INDEX "idx_postid" ON "Post"("id");


CREATE TABLE "Post_category"(
    "postid" VARCHAR(11) NOT NULL REFERENCES "Post"("id") ON DELETE CASCADE,
    "category_id" VARCHAR(11) NOT NULL REFERENCES "Category"("id"),
    CONSTRAINT "post_category_pkey" PRIMARY KEY ("postid", "category_id")
);
CREATE INDEX "idx_postid" ON "Post_category"("postid");
CREATE INDEX "idx_p_categoryid" ON "Post_category"("category_id");


