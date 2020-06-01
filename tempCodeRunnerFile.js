 // do{
        
    //     let u = ExactMin(Heap, cost, pos);
    //     if(!visited[u]&&u!=-1){
    //         visited[u]=true;
    //         console.log(u)
    //         for (let i= 0; i<graph[u].length;i++){
    //             if(cost[graph[u][i][0]] > cost[u]){
    //                 cost[graph[u][i][0]]=graph[u][i][1];
    //                 DecreaseKey(Heap, pos, cost, graph[u][i][0], cost[u]+graph[u][i][1]);

    //             }else{
    //                 cost[graph[u][i][0]]=cost[u];
    //                 DecreaseKey(Heap, pos, cost, graph[u][i][0], cost[u]);
    //             }
    //         }
    //     }
    //     else break;
    // }while(Heap)