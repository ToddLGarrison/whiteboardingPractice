export default function taskReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'changed': {
            return tasks.map((target) => {
                if (target.id === action.task.id) {
                    return action.task;
                } else {
                    return target
                }
            });
        }
        case 'deleted': {
            return tasks.filter((target)=> target.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}