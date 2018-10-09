<?php

require '../../app/common.php';

$taskId= $_GET('taskId') ?? 0;

echo 'Task id is:' . $taskId;
