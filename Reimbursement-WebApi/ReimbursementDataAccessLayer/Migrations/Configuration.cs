namespace ReimbursementDataAccessLayer.Migrations
{
    using ReimbursementDataAccessLayer.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ReimbursementDataAccessLayer.DAL.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ReimbursementDataAccessLayer.DAL.ApplicationDbContext context)
        {
            var Test = new List<TestModel>
            {
                new TestModel{ Name="Ritesh"},
                new TestModel{ Name="Avi"},
                new TestModel{ Name="Harsh"},
                new TestModel{ Name="Deepak"},
                new TestModel{ Name="kapil"},
            };

            Test.ForEach(s => context.TestModels.AddOrUpdate(p => p.Name, s));
            context.SaveChanges();



        }
    }
}
