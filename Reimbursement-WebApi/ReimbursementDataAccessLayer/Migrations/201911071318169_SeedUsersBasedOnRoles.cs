namespace ReimbursementDataAccessLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsersBasedOnRoles : DbMigration
    {
        public override void Up()
        {
            Sql(@"INSERT INTO [dbo].[AspNetUsers] ([Id],[FullName],[BankName],[AccountNumber],[PanNumber],[Email],[EmailConfirmed],[PasswordHash],[SecurityStamp],[PhoneNumber],[PhoneNumberConfirmed],[TwoFactorEnabled],[LockoutEndDateUtc],[LockoutEnabled],[AccessFailedCount],[UserName])
                VALUES( N'93bd4f0d-a756-4923-b53d-fd0914b46d33', N'Ritesh Raman Aryan', N'State Bank Of India', N'223456789123', N'ADNBHYCVYK', N'adminritesh@gmail.com', 0 ,N'ACxEp+tNyaMoPD7JS/vgvsWj3GNGRQF41kJP85KEQA+pYPAviJpVuFT7tHLp7FS0VQ==', N'26474427-6c22-40dd-ac49-3dd9979f088b', NULL ,0, 0, NULL,0,0, N'adminritesh@gmail.com')

            INSERT INTO [dbo].[AspNetRoles]([Id],[Name]) 
               VALUES(N'9891a3ef-5662-4cb3-b54d-fe6e2e9bcc0c', N'CanManageReimbursementPortal')

            INSERT INTO [dbo].[AspNetUserRoles] ([UserId],[RoleId])
                 VALUES(N'93bd4f0d-a756-4923-b53d-fd0914b46d33',N'9891a3ef-5662-4cb3-b54d-fe6e2e9bcc0c')");
        }
        
        public override void Down()
        {
        }
    }
}
