import { Component, OnInit } from '@angular/core';
import { FullUserDto } from '../models/full-user.dto';
import { CompanyService } from '../services/company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: FullUserDto[] = [];
  selectedCompanyId: number | null = null;

  constructor(
    private companyService: CompanyService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCompanyId = +params['companyId'] || null;
      if (this.selectedCompanyId) {
        this.fetchUsers(this.selectedCompanyId);
      } else {
        this.router.navigate(['/select-company']);
      }
    });
  }

  fetchUsers(companyId: number) {
    this.companyService.getUsersByCompanyId(companyId).subscribe({
      next: (users: FullUserDto[]) => this.users = users,
      error: (error: any) => console.error('Failed to load users', error)
    });
  }

  onAddUser() {
    this.router.navigate(['/add-user']);
  }
}