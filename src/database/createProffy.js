module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {
  // ====Inserir dados na tabela de proffys====
  // Aguarda a execução da função que retornará o id de proffy
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name, 
      avatar,
      whatsapp, 
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsapp}",
      "${proffyValue.bio}"
    );
  `)

  const proffy_id = insertedProffy.lastID

  // ====Inserir dados na tabela classes====
  const insertedClass = await db.run(`
    INSERT INTO classes (
      subject, 
      cost,
      proffy_id
    ) VALUES (
      "${classValue.subject}",
      "${classValue.cost}",
      "${proffy_id}"
    );
  `)

  const class_id = insertedClass.lastID

  // ====Inserir dados na tabela class_schedule====
  // Lembrando que aqui está recebendo um array
  const insertedAllClassScheduleValues = classScheduleValues.map((value) => {// O .map itera sobre todos os valores como o forEach, porém ela faz um return de um array
    return db.run(`
    INSERT INTO class_schedule (
      class_id,
      weekday,
      time_from,
      time_to
    ) VALUES (
      "${class_id}",
      "${value.weekday}",
      "${value.time_from}",
      "${value.time_to}"
    );
  `)
  })
  // Aqui será executado todos os db.runs() das class_schedules
  await Promise.all(insertedAllClassScheduleValues)
}