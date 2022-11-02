console.log(solanaWeb3);

function onInitialize() {
    splToken.initializeGame();
}
function onCreateRoom() {
    splToken.createRoom(0, ""); // 0 - 0.25 sol, 1- 0.5 sol, 2 - 0.75 sol, 3 - 1 sol
}
function onJoinRoom() {
    splToken.joinRoom("GGAHMcxqrNkfpFMf1sfRSKH9jgUhM16mEKMNhbeCfxzr");
}
function onEndRoom() {
    splToken.endRoom("GGAHMcxqrNkfpFMf1sfRSKH9jgUhM16mEKMNhbeCfxzr");
}

async function connectWallet(){
    let data = await getaccount();
    // console.log("controller data = = = =", data);
    // myGameInstance.SendMessage(
    //     "GameManager",
    //     "Response_WalletLogin",
    //     data
    // );
}

async function createRoom(value, roomId) {
    await splToken.createRoom(value, roomId);

    myGameInstance.SendMessage(
        "GameManager",
        "Response_CreateRoom",
        roomId
    );
}
async function claim(roomId) {
    await splToken.joinRoom(roomId);
    
    myGameInstance.SendMessage(
        "GameManager",
        "Response_Claim",
        roomId
    );
}
async function enterRoom(value) {
    await transferSOL(value);

    myGameInstance.SendMessage(
        "GameManager",
        "Response_EnterRoom",
        value
    );
}