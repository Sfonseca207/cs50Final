const app = require("./src/server.js")
const router = require("./src/routes/index.js");
const dbConnection = require("./src/config/dbConfig.js");





const serverOn = async () => {
    
    try {
        
        await dbConnection();

        console.log("Conexio a db exitosa");
        

        app.use(router);

        app.listen(3000, ()=>{
        
            console.log("Servidor en puerto 3000");
                
            
        })

    } catch (error) {
        
        console.log(`Eror al iniciar servidor ${error}`);
        

    }

}

serverOn()

