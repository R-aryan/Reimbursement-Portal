namespace ReimbursementDataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedClaimDateColumnToReimbursementTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ReimbursementDatas", "ClaimDate", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ReimbursementDatas", "ClaimDate");
        }
    }
}
