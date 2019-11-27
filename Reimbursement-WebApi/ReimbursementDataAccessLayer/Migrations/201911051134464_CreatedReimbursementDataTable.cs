namespace ReimbursementDataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreatedReimbursementDataTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ReimbursementDatas",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Email = c.String(nullable: false, maxLength: 250),
                        ReimbursementType = c.String(nullable: false, maxLength: 250),
                        Currency = c.String(nullable: false, maxLength: 25),
                        RequestedValue = c.String(nullable: false, maxLength: 6),
                        ApprovedValue = c.String(nullable: false, maxLength: 6),
                        RequestPhase = c.String(nullable: false, maxLength: 250),
                        ReciptAttached = c.String(),
                        DateString = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ReimbursementDatas");
        }
    }
}
