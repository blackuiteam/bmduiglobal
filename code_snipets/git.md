echo "# bmduiglobal" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/blackuiteam/bmduiglobal.git
git push -u origin master


git add .
yarn build
yarn deploy
git commit -m "commit"
git push -u origin master
