const tasksArray = [
  {
    id: '66349e62-2323-4ddf-b5c7-c6ec0aca5c53',
    title: 'clean my room',
    description: 'lots of cleaning have to be done',
    status: 'OPEN',
  },
  {
    id: 'b9ef578e-5d36-424d-bbc6-240f81752fef',
    title: 'clean my room',
    description: 'lots of cleaning have to be done',
    status: 'OPEN',
  },
  {
    id: '7ccf957d-7f43-435c-8c27-d34b03d9784d',
    title: 'clean my room',
    description: 'lots of cleaning have to be done',
    status: 'OPEN',
  },
];

const newArrayAfterDeleting = (id: string) => {
  const idElemToDelete = tasksArray.findIndex((element) => element.id === id);
  console.log('id to delete: ', idElemToDelete);
  const newTasksArray = tasksArray.splice(idElemToDelete, 1);
  return newTasksArray;
};

console.log(newArrayAfterDeleting('b9ef578e-5d36-424d-bbc6-240f81752fef'));
console.log('array after deleting: ', tasksArray);
