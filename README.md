# learnGit

Git is a distributed version control system.
Git is free software.

## git使用感触

使用git有一个年头了，之前用了三年的svn。可能因为使用svn的时候只是简单的使用那个乌龟工具，合并分支的时候，也有很完善的文档一步步指导该怎么做，所以切换到git之后，并没有太多的难以接受的改变。

要入门git，首推还是阮一峰的教程，算得上是通俗易懂且相对比较全面。工作区什么的概念，我弄明白了它们的作用以及区别，但是要我说是说不清楚的。*git stash* *git add* *git reset* *git commit* 这样的命令多用几次，自然而然就懂了。当然了，新手就不要在正式的代码上上手了，自己创建个练习用的代码库就好了。

所以，不得不说，要学好git，就必须使用命令行。我用了三年的svn，因为几乎不使用命令行，而没什么收获。而使用git命令之后，尝试
解决几次各个场景下的问题，心里就有底了。

倒不是说git就这么容易，git的命令还会有很多很多，还有更多的参数等待你的记忆与挑战，只是那些日常并不会用到，不知道就不知道了吧，知道怎么查就好了。例如：*man git-log*这样的。

当然了，图型工具对我还是有帮助的，可以用来查看日志记录，查看某个文件的修改历史。不过也仅仅是因为我并没有掌握那个命令！

## git的常用情形
+ git log
+ git status
+ git add *
+ git reset
+ git stash save 'stash message'
+ git commit -m 'commit message'
+ git revert <commit hash>
+ git clean -df public/
+ git pull
+ git checkout -b develop
+ git push
+ git stash apply stash@{0}
+ git branch
+ git remote -v
+ git branch -rr
+ git diff public/
+ git show <commit hash>