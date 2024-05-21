// Zadanie 3. Profil gracza
const profile = {
	username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
    this.username = newName;
    },
    updatePlayTime(hours) {
    this.playTime += hours;
    },
    getInfo(){
        console.log(`${Username} ma ${amount} aktywnych godzin!`);
    }
};
