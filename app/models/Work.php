<?php

 class Work
 {
   public $id;
   public $comment;


   public function __construct($row) {
      $this->id = intval($row['id']);
      $this->comment = $row['comment'];

}
      public static function getWorkByTaskId(int $taskId) {

      return [] ;
    }


 }
