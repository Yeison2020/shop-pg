# Installing Yarn

curl -o- -L https://yarnpkg.com/install.sh | bash

# Installing NodeJS

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

. ~/.nvm/nvm.sh

nvm install --lts

node -e "console.log('Running Node.js ' + process.version)"


