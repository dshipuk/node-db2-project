// STRETCH
const cars = [
    {
        vin: '4S3BJ6332P6953766',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: 'JH4DA9360LS010859',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage'
    },
    {
        vin: '2CNDL23F856093901',
        make: 'ford',
        model: 'focus',
        mileage: 15000
    }
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then( () => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}