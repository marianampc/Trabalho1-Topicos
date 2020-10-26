//Este documento serve como um modelo das variáveis do banco de dados.
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const disciplinaSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true,
      unique: true
    },
    nome: {
      type: String,
      required: true,
    },
    professor: {
      type: String,
      required: true,
    },
    departamento: {
      type: String,
      required: true,
    },
    QtdCretidos: {
      type: Number,
      required: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

disciplinaSchema.plugin(autoIncrement.plugin, {
  model: "disciplina",
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

export default mongoose.model("disciplina", disciplinaSchema);
