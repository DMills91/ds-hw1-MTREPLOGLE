-- Create the Teams table.
DROP TABLE IF EXISTS Teams;
CREATE TABLE Teams (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR(100) NOT NULL

);

-- Insert some rows in the Teams table.
INSERT INTO Teams (id, comment)
VALUES (1, 'I cant believe how great this is');
INSERT INTO Teams (id, comment)
VALUES (2, 'This is the best');
