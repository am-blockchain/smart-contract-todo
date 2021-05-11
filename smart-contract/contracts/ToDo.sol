// SPDX-License-Identifier: MIT
pragma solidity >=0.6.6;

contract Todo {
    constructor() public {
        createTask("Test Task");
    }

    uint256 public count = 0;

    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    mapping(uint256 => Task) public tasks;

    event TaskCreated(uint256 id, string content, bool completed);

    event TaskCompleted(uint256 id, bool completed);

    function createTask(string memory _content) public {
        count++;
        tasks[count] = Task(count, _content, false);
        emit TaskCreated(count, _content, false);
    }

    function completeTask(uint256 _id) public {
        Task memory _task = tasks[_id];
        _task.completed = true;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }
}
