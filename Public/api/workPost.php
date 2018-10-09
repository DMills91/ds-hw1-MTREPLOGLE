<?php
$comment = new Team($_POST);
$comment->create();
echo json_encode($comment);
