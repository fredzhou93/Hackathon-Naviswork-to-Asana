//API Reference

//For Creating a Project
//POST https://app.asana.com/api/1.0/projects

//Data Format

{
  "data": {
    "workspace": "name of workspace",
    "name": "The name of the task"
  }
}

//In order to proceed, we need to know the project id of the newly created one so we need to read the respond
{
  "data": {
    "notes": "",
    "null": "",
    "id": 1331, //Store this as project-id
    "name": "The name of the task"
  }
}



//For Updating a Project
//PUT https://app.asana.com/api/1.0/projects/project-id

//Data Format

{
  "data": {
    "workspace": "name of workspace",
    "name": "The name of the task"
  }
}


//For Creating a Task
//POST https://app.asana.com/api/1.0/tasks

//Data Format

"data": {
    "name": Clash Group Name, //Probably also need id in order to do update
    "completed": false, //Resolved (mark the task as complete)
    "due_on": "", //Date Found ( Automatically adding 7(adjustable) days to work as a deadline
    "projects": [
      {
        "id": 14641,
        "name": "Cat Stuff"
      }
    ],
    "notes": "
      Grid Location,
      Photo,
      Distance
    ",
    "assignee": {
      "id": 1235, //or Name or me 
    },
  }


//For Update Attachment
//POST https://app.asana.com/api/1.0/tasks/1337/attachments

//Data Format
{
  "data": {
    "name": "file.txt"//File location
  }
}
