
        let node_new = toString(arr[j]);
        let parent_node = toString(graph[i][0]);
        flag = true;
        for(let char of node_new){
            if(parent_node.includes(char)){
                flag=false
            }
        }