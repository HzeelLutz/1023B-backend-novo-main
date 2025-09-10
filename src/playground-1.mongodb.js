use("1023bifms")
db.createCollection("Curso"){
    informatica: {
        ano: Number,
        nome: String,
        professor: {
            nome: String;
            emails: Number,
            cpf: Number,
            idade: Number,
            ativo: Boolean,
        }
    }
    Agricultura: {
        cargaHoraria: Number,
        professor: {
            nome: String,
            experiencia: Number
        }
    }
}

db.Curso.insertMany([
    {
        informatica: {
            tipo: "Técnico",
            cargaHoraria: 40,
            professor: {
                nome: "João Silva",
                experiencia: 5
            }
        }
    },
    {
        informatica: {
            tipo: "Superior",
            cargaHoraria: 60,
            professor: {
                nome: "Maria Oliveira",
                experiencia: 10
            }
        }
    }
])