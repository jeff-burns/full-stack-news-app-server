exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_input")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_input").insert([
        {
          userName: "Jeff",
          source: "BBC News",
          keywords: "World Cup"
        },
        {
          userName: "putintrump",
          source: "USA Today",
          keywords: "Putin Trump"
        },
        {
          userName: "JB",
          source: "The Washington Post",
          keywords: "Trump Russia"
        }
      ]);
    });
};
