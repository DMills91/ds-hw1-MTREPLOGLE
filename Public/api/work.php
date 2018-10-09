<?php

require '../../app/common.pho';

$taskId= $_GET('taskId') ?? 0;

echo 'Task id is:' . $taskId;
