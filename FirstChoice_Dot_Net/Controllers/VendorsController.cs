using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FirstChoice.Models;

namespace FirstChoice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorsController : ControllerBase
    {
        private readonly TestContext _context;

        public VendorsController(TestContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vendor>>> GetVendors()
        {
          if (_context.Vendors == null)
          {
              return NotFound();
          }
            return await _context.Vendors.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vendor>> GetVendor(int id)
        {
          if (_context.Vendors == null)
          {
              return NotFound();
          }
            var vendor = await _context.Vendors.FindAsync(id);

            if (vendor == null)
            {
                return NotFound();
            }

            return vendor;
        }

        private bool VendorExists(int id)
        {
            return (_context.Vendors?.Any(e => e.VId == id)).GetValueOrDefault();
        }
    }
}
