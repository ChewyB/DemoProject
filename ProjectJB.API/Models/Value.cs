namespace ProjectJB.API.Models
{
    /**
    - We can relate to models as tables in a database 
    - Since we will be using Entity Framework(EF), we need to tell EF about this model
      because EF is going to be responsible for scaffolding and creating our Database.
    - EF will also be used to query our Database
    - Models are also known as Entities
     */
    public class Value
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}