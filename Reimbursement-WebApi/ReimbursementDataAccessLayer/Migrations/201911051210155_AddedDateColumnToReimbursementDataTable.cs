namespace ReimbursementDataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedDateColumnToReimbursementDataTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ReimbursementDatas", "ClaimDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ReimbursementDatas", "ClaimDate");
        }
    }
}
