// const sequelize = require('../config/database');
// const { User, Profile, Teacher, Course, Student } = require('../models');

// (async () => {
//   await sequelize.sync({ force: true });

//   // Seed Users and Profiles
//   const user = await User.create({name: 'Alice', email: 'alice@example.com', age: 25 });
//   await Profile.create({ bio: 'I love coding!', userId: user.id });


//   // // Seed Teachers and Courses
//   // const teacher = await Teacher.create({ name: 'Dr. Smith', department: 'Science' });
//   // await Course.bulkCreate([
//   //   { title: 'Mathematics', description: 'Basic Math course', teacherId: teacher.id },
//   //   { title: 'Physics', description: 'Advanced Physics course', teacherId: teacher.id },
//   // ]);

//   // // Seed Students and Enrollments
//   // const [student1, student2] = await Student.bulkCreate([
//   //   { name: 'Alice', rollNumber: 'S123' },
//   //   { name: 'Bob', rollNumber: 'S124' },
//   // ]);

//   // const [course1, course2] = await Course.findAll();
//   // await student1.addCourses([course1, course2]);
//   // await student2.addCourse(course1);

//   // console.log('Seeding completed.');
//   // process.exit();

//   console.log('Database seeded successfully.');
  
// })();






const db = require('../models'); // Import from models/index.js

(async () => {
  try {
    await db.sequelize.sync({ force: true });

    // Seed Users and Profiles
    const user = await db.User.create({
      name: 'Alice',
      email: 'alice@example.com',
      age: 25,
    });

    await db.Profile.create({
      bio: 'I love coding!',
      userId: user.id,
    });

    console.log('Database seeded successfully.');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    process.exit();
  }
})();
