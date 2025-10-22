class Robot{
    constructor(name){
        this.name=name;
    }

    move(){
        console.log(`${this.name} is moving`);
    }
}

const r0= new Robot('some robot');
r0.move();

class Weapon{
    constructor(description){
        this.description=description;
    }

    fire(){
        console.log(`${this.description} is firing`);
    }
}

const w0= new Weapon(`pew pew laser`);
w0.fire();

class CombatRobot extends Robot{
    constructor(name){
        super(name);
        this.weapons=[]
    }

    addWeapon(w){
        this.weapons.push(w);
    }

    fire(){
        console.log('firing all weapons');
        for (const w of this.weapons){
            w.fire()
        }
    }
}

const r1= new CombatRobot('some combat robot')
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly = function() {
    console.log(`${this.name} is flying`);
}

r1.fly();

class Software{
    constructor(name){
        this.name=name;
    }

    run(){
        console.log(`${this.name} is running`);
    }
}

class Plugin{
    constructor(name){
        this.name=name;
        this.installed=false;
    }

    install(browser){
        if(this.installed){
            console.log(`${this.name} already installed in ${browser.name}`);
            return;
        }

        this.installed=true;
        console.log(`${this.name} installed in ${browser.name}`)
    }
}

const p0= new Plugin('uBlock');
const p1= new Plugin('DarkReader');

class Browser extends Software{
    constructor(name){
        super(name);
        this.plugins=[];
    }

    add(plugin){
        if(this.plugins.includes(plugin)){
            console.log(`${plugin.name} already added in ${this.name}`);
            return;
        }

        this.plugins.push(plugin);
        console.log(`${plugin.name} added in ${this.name}`);
    }

    install(){
        for(const p of this.plugins){
            p.install(this);
        }
    }
}

const b0= new Browser('Firefox');

console.log("");
b0.add(p0);
b0.add(p1);
b0.add(p1);

console.log("");
b0.install();
b0.install();

console.log("");
b0.run();