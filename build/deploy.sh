#!/usr/bin/env bash
# Portions from:
# https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
# http://scurker.com/automated-deploys-with-travis/
set -ev

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
  echo "Skipping deploy"
  exit 0
fi

echo "Deploying"
{
  SHA=`git rev-parse --verify HEAD`
  echo -e "Host ${DEPLOY_HOST}\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
  openssl aes-256-cbc -K $encrypted_cf86cbb133e1_key -iv $encrypted_cf86cbb133e1_iv -in build/deploy-key.enc -out build/deploy-key -d
  chmod 0600 build/deploy-key
  mv build/deploy-key ~/.ssh/id_rsa
  yarn
  yarn build -- --production
  rsync -r dist/ ${DEPLOY_ACCOUNT}@${DEPLOY_HOST}:${DEPLOY_PATH}
} &> /dev/null
