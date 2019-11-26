using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit https://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        [Required]
        [MaxLength(250)]
        public string FullName { get; set; }

        [Required]
        [MaxLength(250)]
        public string BankName { get; set; }

        [Required]
        [MaxLength(20)]
        //[RegularExpression(@"^[0-9]{12}$")]
        public string AccountNumber { get; set; }

        [Required]
        [MaxLength(10)]
        //[RegularExpression(@"^[A-Za-z0-9]{10}$")]
        public string PanNumber { get; set; }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
            // Add custom user claims here
            return userIdentity;
        }
    }
}
