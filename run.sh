getDiff() {
  git diff $1 $2 | mate -
}

getLastCommit() {
  commitList=`git log | grep -e commit`
  OLD_IFS="$IFS"
  IFS=" "
  arr=($commitList)
  IFS="$OLD_IFS"
  length=${#arr[@]}

  for ((i=0; i<$length; i++))
  do
       if [ "${arr[$i]: 0: 40}" = "$1" ]; then
         echo ${arr[$i - 1]: 0: 40}
       fi

  done
}


lastCommit=`cat lastCommit`
startCommit=`getLastCommit $lastCommit`

endCommitLog=`git log -1`
endCommit=${endCommitLog: 7: 39}

echo $endCommit > lastCommit
getDiff $startCommit $endCommit
