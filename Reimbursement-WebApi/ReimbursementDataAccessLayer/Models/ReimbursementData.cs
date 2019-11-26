using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.Models
{
    public class ReimbursementData
    {
        public ReimbursementData()
        {
            //ClaimDate = new DateTime().Date;
            //RequestPhase = "To Be Processed";
        }


        [Key]
        public int ID{ get; set; }

        [Required]
        [MaxLength(250)]
        public string Email { get; set; }

        [Required]
        [MaxLength(250)]
        public string ReimbursementType { get; set; }

        [Required]
        [MaxLength(25)]
        public string Currency { get; set; }

        [Required]
        //[MaxLength(6)]
        //[RegularExpression(@"^[0-9]+$")]
        public string AmountRequested { get; set; }

        [Required]
        //[MaxLength(6)]
        //[RegularExpression(@"^[0-9]+$")]
        public string AmountApproved { get; set; }

        [Required]
        [MaxLength(250)]
        public string RequestPhase { get; set; }

        
        public string ReciptAttached { get; set; }

        [Required]
        public string DateString { get; set; }

        public DateTime? ClaimDate { get; set; }




    }
}
