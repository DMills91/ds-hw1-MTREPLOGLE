<?php

 class Work
 {
   public $id;
   public $comment;


   public function __construct($row) {
      $this->id = intval($row['id']);
      $this->comment = $row['comment'];

      public static function getWorkByTaskId(int $taskId) {
      // 1. Connect to the database
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);
      // 2. Prepare the query
      $sql = 'SELECT * FROM Work WHERE task_id = ?';
      $statement = $db->prepare($sql);
      // 3. Run the query
      $success = $statement->execute(
          [$taskId]
      );
      // 4. Handle the results
      $arr = [];
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        // 4.a. For each row, make a new work object
        $workItem =  new Work($row);
        array_push($arr, $workItem);
      }
      return $arr;
    }

   }
 }
