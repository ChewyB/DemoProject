using Microsoft.EntityFrameworkCore;
using ProjectJB.API.Models;

namespace ProjectJB.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        /**
        - In our DataContext class in order to tell entity framework about our entities (models)
          we need to give it some properties and these properties are of type DbSet<T>
         */
         public DbSet<Value> Values { get; set; }
    }
}