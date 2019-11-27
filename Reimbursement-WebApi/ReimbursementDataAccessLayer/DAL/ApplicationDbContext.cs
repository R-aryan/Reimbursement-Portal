using Microsoft.AspNet.Identity.EntityFramework;
using ReimbursementDataAccessLayer.Models;
using System.Data.Entity;

namespace ReimbursementDataAccessLayer.DAL
{


    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        
        public DbSet<TestModel> TestModels { get; set; }
        public DbSet<BankNameList> BankNameLists { get; set; }
        public DbSet<EmployeeData> EmployeeDatas { get; set; }
        public DbSet<ReimbursementData> ReimbursementDatas { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }
        
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}