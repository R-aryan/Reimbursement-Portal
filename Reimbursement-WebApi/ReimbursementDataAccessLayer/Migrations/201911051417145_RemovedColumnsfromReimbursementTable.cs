namespace ReimbursementDataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedColumnsfromReimbursementTable : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.ReimbursementDatas", "RequestedValue");
            DropColumn("dbo.ReimbursementDatas", "ApprovedValue");
            DropColumn("dbo.ReimbursementDatas", "ClaimDate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ReimbursementDatas", "ClaimDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.ReimbursementDatas", "ApprovedValue", c => c.String(nullable: false, maxLength: 6));
            AddColumn("dbo.ReimbursementDatas", "RequestedValue", c => c.String(nullable: false, maxLength: 6));
        }
    }
}
