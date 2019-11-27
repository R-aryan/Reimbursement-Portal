namespace ReimbursementDataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedAmountRequestedAndAmountApprovedColumnfromReimbursementTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ReimbursementDatas", "AmountRequested", c => c.String(nullable: false));
            AddColumn("dbo.ReimbursementDatas", "AmountApproved", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ReimbursementDatas", "AmountApproved");
            DropColumn("dbo.ReimbursementDatas", "AmountRequested");
        }
    }
}
