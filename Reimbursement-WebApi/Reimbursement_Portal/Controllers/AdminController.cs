using ReimbursementBusinessLayer.BusinessService;
using ReimbursementShared.SharedDTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Reimbursement_Portal.Controllers
{
    [Authorize]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class AdminController : ApiController
    {
        public AdminService admin;
        public AdminController()
        {
            admin = new AdminService();
        }

        // GET api/admin
        public List<ReimbursementDataDTO> GetPendingData()
        {
            return admin.GetPendingReimbursementDataService();
        }

        // PUT api/admin/id
        [HttpPut]
        public ReimbursementDataDTO PutData(int id, ReimbursementDataDTO val)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            if (val.RequestPhase.Equals("Approved"))
            {
                return admin.SaveApprovedClaims(id, val);
            }

            else
            {
                return admin.SaveDeclinedClaims(id, val);
            }
        }

        // GET api/values/5
        public List<ReimbursementDataDTO> GetDeclinedData(string id)
        {
            return admin.GetAllDeclinedClaims(id);
        }
    }
}
